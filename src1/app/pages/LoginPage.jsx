import { Header } from '../components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { User, Baby, Upload } from 'lucide-react';
import { motion } from 'motion/react';

const avatars = ['🦁', '🐯', '🐼', '🦊', '🐨', '🐸', '🦄', '🐉'];

export default function LoginPage() {
    const [isSignup, setIsSignup] = useState(false);
    const [userType, setUserType] = useState('child');
    const [selectedAvatar, setSelectedAvatar] = useState('🦁');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login/signup
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
            <Header />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-center">
                            <div className="text-6xl mb-4">🎨</div>
                            <h1 className="text-4xl text-white mb-2">
                                {isSignup ? 'Create Your Account!' : 'Welcome Back!'}
                            </h1>
                            <p className="text-white/90 text-lg">
                                {isSignup ? 'Join the fun! 🎉' : 'Let\'s continue the fun! 🚀'}
                            </p>
                        </div>

                        {/* Form */}
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* User Type Selection */}
                                {isSignup && (
                                    <div className="space-y-3">
                                        <Label className="text-xl text-purple-700">I am a:</Label>
                                        <RadioGroup value={userType} onValueChange={setUserType} className="grid grid-cols-2 gap-4">
                                            <div className={`border-4 rounded-2xl p-6 cursor-pointer transition-all ${userType === 'child' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}>
                                                <RadioGroupItem value="child" id="child" className="sr-only" />
                                                <label htmlFor="child" className="cursor-pointer flex flex-col items-center">
                                                    <Baby className="w-12 h-12 text-purple-600 mb-2" />
                                                    <span className="text-lg text-purple-700">Child 👶</span>
                                                </label>
                                            </div>
                                            <div className={`border-4 rounded-2xl p-6 cursor-pointer transition-all ${userType === 'parent' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'}`}>
                                                <RadioGroupItem value="parent" id="parent" className="sr-only" />
                                                <label htmlFor="parent" className="cursor-pointer flex flex-col items-center">
                                                    <User className="w-12 h-12 text-purple-600 mb-2" />
                                                    <span className="text-lg text-purple-700">Parent 👨‍👩‍👧</span>
                                                </label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                )}

                                {/* Avatar Selection for Kids */}
                                {isSignup && userType === 'child' && (
                                    <div className="space-y-3">
                                        <Label className="text-xl text-purple-700">Pick your avatar:</Label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {avatars.map((avatar) => (
                                                <button
                                                    key={avatar}
                                                    type="button"
                                                    onClick={() => setSelectedAvatar(avatar)}
                                                    className={`text-5xl p-4 rounded-2xl transition-all hover:scale-110 ${selectedAvatar === avatar ? 'bg-purple-200 scale-110' : 'bg-gray-100'
                                                        }`}
                                                >
                                                    {avatar}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Name */}
                                {isSignup && (
                                    <div className="space-y-2">
                                        <Label className="text-xl text-purple-700">
                                            {userType === 'child' ? 'What\'s your name?' : 'Your name:'}
                                        </Label>
                                        <Input
                                            required
                                            placeholder={userType === 'child' ? 'Your cool name!' : 'Enter your name'}
                                            className="border-4 border-purple-200 rounded-2xl p-6 text-lg"
                                        />
                                    </div>
                                )}

                                {/* Email/Username */}
                                <div className="space-y-2">
                                    <Label className="text-xl text-purple-700">
                                        {userType === 'child' ? 'Username:' : 'Email:'}
                                    </Label>
                                    <Input
                                        required
                                        type={userType === 'child' ? 'text' : 'email'}
                                        placeholder={userType === 'child' ? 'coolkid123' : 'your@email.com'}
                                        className="border-4 border-purple-200 rounded-2xl p-6 text-lg"
                                    />
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label className="text-xl text-purple-700">Password:</Label>
                                    <Input
                                        required
                                        type="password"
                                        placeholder="Enter password"
                                        className="border-4 border-purple-200 rounded-2xl p-6 text-lg"
                                    />
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl py-8 text-xl shadow-xl hover:scale-105 transition-all"
                                >
                                    {isSignup ? '🎉 Create Account!' : '🚀 Let\'s Go!'}
                                </Button>
                            </form>

                            {/* Toggle */}
                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => setIsSignup(!isSignup)}
                                    className="text-purple-600 hover:text-purple-700 text-lg underline"
                                >
                                    {isSignup ? 'Already have an account? Login!' : 'New here? Sign up!'}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Safety Note */}
                    <div className="mt-8 bg-yellow-100 border-4 border-yellow-400 rounded-3xl p-6">
                        <p className="text-yellow-800 text-center text-lg">
                            🛡️ <strong>Safety First!</strong> Always ask a parent before creating an account!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
