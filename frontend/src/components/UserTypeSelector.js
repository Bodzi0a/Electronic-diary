import  React, { useState } from 'react';
import LoginForm from './LoginForm';

const UserTypeSelector = () => {
    const [selectedType, setSelectedType] = useState(null);

    const handleStudentParent = () => {
        setSelectedType('student-parent');
    };
    const handleTeacher = () => {
        alert("wybrano nauczyciela")
        setSelectedType('teacher');
    };

    if (selectedType === 'student-parent') {
        return <LoginForm />;
    }




    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Dziennik Elektroniczny
                </h1>
                <p className="text-gray-600 mb-8">
                    Wybierz swój typ konta
                </p>
                
               <div className='space-y-4'>
                <button 
                onClick={handleStudentParent}
                className='w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-medium transition-colors flex items-center justify-center'>
                    <span className="mr-3 text-2xl"></span>
                    Jestem uczniem lub rodzicem
                </button>

                <button 
                onClick={handleTeacher}
                className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                <span className="mr-3 text-2xl"></span>
                Jestem nauczycielem
                 </button>

               </div>
            </div>
        </div>
    );
};


export default UserTypeSelector;
