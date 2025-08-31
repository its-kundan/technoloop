import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search, Rocket, Target, Zap, ArrowRight, Play, Building2 } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <section className='relative min-h-screen flex items-center overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20'></div>
            
            {/* Animated background shapes */}
            <div className='absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
            <div className='absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-500'></div>
            
            {/* Grid pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>
            
            <div className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Content */}
                    <div className='space-y-8 animate-fade-in-up'>
                        {/* Badge */}
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20'>
                            <Rocket className='w-4 h-4 text-primary' />
                            <span className='text-sm font-medium text-primary'>🚀 Launch Your Career</span>
                        </div>
                        
                        {/* Main Heading */}
                        <div className='space-y-6'>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                                Find Your
                                <span className='block text-gradient'>Dream Job</span>
                                <span className='block text-foreground'>Today</span>
                            </h1>
                            <p className='text-xl text-muted-foreground max-w-lg leading-relaxed'>
                                Connect with top companies and discover opportunities that match your skills and aspirations. 
                                Your next career move starts here.
                            </p>
                        </div>
                        
                        {/* Search Section */}
                        <div className='space-y-4'>
                            <div className='relative'>
                                <div className='flex items-center bg-card border border-border rounded-2xl shadow-modern overflow-hidden hover:shadow-modern-lg transition-all duration-300'>
                                    <div className='flex-1 flex items-center px-6 py-4'>
                                        <Search className='w-5 h-5 text-muted-foreground mr-4' />
                                        <input
                                            type="text"
                                            placeholder='Search for jobs, companies, or skills...'
                                            onChange={(e) => setQuery(e.target.value)}
                                            className='flex-1 bg-transparent outline-none text-lg placeholder-muted-foreground'
                                            onKeyPress={(e) => e.key === 'Enter' && searchJobHandler()}
                                        />
                                    </div>
                                    <Button 
                                        onClick={searchJobHandler} 
                                        className="btn-primary rounded-l-none px-8 py-4 text-lg font-semibold"
                                    >
                                        <Search className='w-5 h-5 mr-2' />
                                        Search
                                    </Button>
                                </div>
                            </div>
                            
                            {/* Quick Stats */}
                            <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                                <div className='flex items-center gap-2'>
                                    <Target className='w-4 h-4 text-primary' />
                                    <span>10K+ Active Jobs</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Zap className='w-4 h-4 text-secondary' />
                                    <span>500+ Companies</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Button className='btn-primary text-lg px-8 py-4'>
                                Get Started
                                <ArrowRight className='w-5 h-5 ml-2' />
                            </Button>
                            <Button variant="outline" className='btn-secondary text-lg px-8 py-4'>
                                <Play className='w-5 h-5 mr-2' />
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    
                    {/* Right Content - Visual Element */}
                    <div className='relative animate-fade-in-scale' style={{animationDelay: '0.3s'}}>
                        <div className='relative'>
                            {/* Main card */}
                            <div className='card-modern p-8 bg-gradient-to-br from-card to-card/80'>
                                <div className='space-y-6'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-12 h-12 gradient-primary rounded-xl flex items-center justify-center'>
                                                <Building2 className='w-6 h-6 text-white' />
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-foreground'>TechCorp Inc.</h3>
                                                <p className='text-sm text-muted-foreground'>San Francisco, CA</p>
                                            </div>
                                        </div>
                                        <div className='badge-modern'>Full-time</div>
                                    </div>
                                    
                                    <div>
                                        <h4 className='text-xl font-bold text-foreground mb-2'>Senior Software Engineer</h4>
                                        <p className='text-muted-foreground mb-4'>
                                            Join our team to build next-generation applications using cutting-edge technologies.
                                        </p>
                                        <div className='flex flex-wrap gap-2'>
                                            <span className='badge-modern-secondary'>React</span>
                                            <span className='badge-modern-accent'>Node.js</span>
                                            <span className='badge-modern'>TypeScript</span>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-center justify-between pt-4 border-t border-border/50'>
                                        <div className='text-2xl font-bold text-gradient'>$120K - $180K</div>
                                        <Button className='btn-primary'>Apply Now</Button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating elements */}
                            <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl blur-xl animate-pulse'></div>
                            <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl animate-pulse delay-1000'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection