import { useState } from 'react';
import Modal from '@/Components/Modal';
import Login from '@/Pages/Auth/Login';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Main from '@/Components/Main';
import Register from "@/Pages/Auth/Register";
import { useEffect } from 'react';
import {usePage} from "@inertiajs/react";

export default function AuthenticatedLayout({ user, header, children }) {
    const [showingLoginModal, setShowingLoginModal] = useState(false);
    const [showingRegisterModal, setShowingRegisterModal] = useState(false);
    const { props } = usePage();
    const closeLogin = () => setShowingLoginModal(false);
    const closeRegister = () => setShowingRegisterModal(false)

    useEffect(() => {
        if (props.flash?.openModal === 'login') {
            setShowingLoginModal(true);
        } else if (props.flash?.openModal === 'register') {
            setShowingRegisterModal(true);
        }
    }, [props.flash]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <Navbar
                    user={user}
                    onOpenLogin={() => setShowingLoginModal(true)}
                    onOpenRegister={() => setShowingRegisterModal(true)}
                />
            </header>

            <Modal show={showingLoginModal} onClose={closeLogin}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Sign In</h2>
                        <button onClick={closeLogin} className="text-gray-400 hover:text-gray-600 text-2xl">
                            &times;
                        </button>
                    </div>
                    <Login status={null} canResetPassword={true} />
                </div>
            </Modal>

            <Modal show={showingRegisterModal} onClose={closeRegister}>
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Register</h2>
                        <button onClick={closeRegister} className="text-gray-400 hover:text-gray-600 text-2xl">
                            &times;
                        </button>
                    </div>
                    <Register status={null}/>
                </div>
            </Modal>

            <Main>
                {children}
            </Main>

            <Footer />
        </div>
    );
}
