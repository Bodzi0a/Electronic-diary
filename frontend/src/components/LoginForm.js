import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('student');

    const handleLogin = () => {
        alert(`Typ: ${userType}, Email: ${email}, Hasło: ${password}`);
    };



        return (
            <div className="min-h-screen bg-blue-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Dziennik Elektroniczny</h1>
                <div className='mb-4'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Logujesz się jako:</p>
                    <div className='flex gap-2'>
                        <button 
                        onClick={() => setUserType('student')}
                        className={`flex-1 p-2 border rounded text-sm ${
                            userType === 'student'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        >
                            uczeń
                        </button>

                        <button 
                        onClick={() => setUserType('rodzic')}
                        className={`flex-1 p-2 border rounded text-sm ${
                            userType ==='rodzic'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        >
                            Rodzic
                        </button>
                    </div>
                </div>





                {/* pole na email */}
                <input
                type="email"
                placeholder="Wpisz swój email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                />
                {/* pole na hasło */}
                <input
                type="password"
                placeholder="Wpisz swoje hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-4"
                />
                {/*przycisk logowania */}
                <button 
                onClick={handleLogin}
                className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700">
                    Zaloguj się
                </button>
                </div>
            </div>
        );
    }
    
export default LoginForm;