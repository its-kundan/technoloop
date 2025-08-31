import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, Building2, Briefcase, Home, Search, Moon, Sun, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@/contexts/ThemeContext'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const { isDark, toggleTheme } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    
    return (
        <nav className='sticky top-0 z-50 glass border-b border-border/50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <div className='flex items-center space-x-3'>
                        <div className='w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-modern'>
                            <Building2 className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-gradient'>CareerHub</h1>
                            <p className='text-xs text-muted-foreground -mt-1'>Find Your Dream Job</p>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <div className='flex items-center space-x-6'>
                            {
                                user && user.role === 'recruiter' ? (
                                    <>
                                        <Link 
                                            to="/admin/companies" 
                                            className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-all duration-300 group'
                                        >
                                            <Building2 className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                            <span className='font-medium'>Companies</span>
                                        </Link>
                                        <Link 
                                            to="/admin/jobs" 
                                            className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-all duration-300 group'
                                        >
                                            <Briefcase className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                            <span className='font-medium'>Jobs</span>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link 
                                            to="/" 
                                            className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-all duration-300 group'
                                        >
                                            <Home className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                            <span className='font-medium'>Home</span>
                                        </Link>
                                        <Link 
                                            to="/jobs" 
                                            className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-all duration-300 group'
                                        >
                                            <Briefcase className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                            <span className='font-medium'>Jobs</span>
                                        </Link>
                                        <Link 
                                            to="/browse" 
                                            className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent transition-all duration-300 group'
                                        >
                                            <Search className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                            <span className='font-medium'>Browse</span>
                                        </Link>
                                    </>
                                )
                            }
                        </div>
                        
                        {/* Dark Mode Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className='w-10 h-10 rounded-lg hover:bg-accent transition-all duration-300'
                        >
                            {isDark ? (
                                <Sun className='w-5 h-5 text-yellow-500' />
                            ) : (
                                <Moon className='w-5 h-5 text-blue-600' />
                            )}
                        </Button>
                        
                        {/* Auth Buttons / User Menu */}
                        {
                            !user ? (
                                <div className='flex items-center space-x-3'>
                                    <Link to="/login">
                                        <Button variant="outline" className='btn-secondary'>
                                            Login
                                        </Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button className='btn-primary'>
                                            Signup
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-300 w-9 h-9">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-0 card-modern border-0">
                                        <div className='p-6 space-y-4'>
                                            <div className='flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5'>
                                                <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                                                </Avatar>
                                                <div>
                                                    <h4 className='font-semibold text-foreground'>{user?.fullname}</h4>
                                                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio || 'No bio available'}</p>
                                                </div>
                                            </div>
                                            
                                            <div className='space-y-1'>
                                                {
                                                    user && user.role === 'student' && (
                                                        <Link to="/profile">
                                                            <div className='flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-all duration-300 group'>
                                                                <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                                                    <User2 className='w-4 h-4 text-primary' />
                                                                </div>
                                                                <span className='font-medium text-foreground'>View Profile</span>
                                                            </div>
                                                        </Link>
                                                    )
                                                }

                                                <div 
                                                    onClick={logoutHandler}
                                                    className='flex items-center space-x-3 p-3 rounded-lg hover:bg-destructive/10 transition-all duration-300 cursor-pointer group'
                                                >
                                                    <div className='w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:bg-destructive/20 transition-colors'>
                                                        <LogOut className='w-4 h-4 text-destructive' />
                                                    </div>
                                                    <span className='font-medium text-foreground'>Logout</span>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )
                        }
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className='md:hidden flex items-center space-x-2'>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className='w-9 h-9 rounded-lg hover:bg-accent'
                        >
                            {isDark ? (
                                <Sun className='w-4 h-4 text-yellow-500' />
                            ) : (
                                <Moon className='w-4 h-4 text-blue-600' />
                            )}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className='w-9 h-9 rounded-lg hover:bg-accent'
                        >
                            {isMobileMenuOpen ? (
                                <X className='w-5 h-5' />
                            ) : (
                                <Menu className='w-5 h-5' />
                            )}
                        </Button>
                    </div>
                </div>
                
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className='md:hidden py-4 border-t border-border/50'>
                        <div className='space-y-2'>
                            {
                                user && user.role === 'recruiter' ? (
                                    <>
                                        <Link 
                                            to="/admin/companies" 
                                            className='flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300'
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Building2 className='w-5 h-5' />
                                            <span className='font-medium'>Companies</span>
                                        </Link>
                                        <Link 
                                            to="/admin/jobs" 
                                            className='flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300'
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Briefcase className='w-5 h-5' />
                                            <span className='font-medium'>Jobs</span>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link 
                                            to="/" 
                                            className='flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300'
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Home className='w-5 h-5' />
                                            <span className='font-medium'>Home</span>
                                        </Link>
                                        <Link 
                                            to="/jobs" 
                                            className='flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300'
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Briefcase className='w-5 h-5' />
                                            <span className='font-medium'>Jobs</span>
                                        </Link>
                                        <Link 
                                            to="/browse" 
                                            className='flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent transition-all duration-300'
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <Search className='w-5 h-5' />
                                            <span className='font-medium'>Browse</span>
                                        </Link>
                                    </>
                                )
                            }
                            
                            {!user && (
                                <div className='pt-4 space-y-2'>
                                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button variant="outline" className='w-full btn-secondary'>
                                            Login
                                        </Button>
                                    </Link>
                                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button className='w-full btn-primary'>
                                            Signup
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar