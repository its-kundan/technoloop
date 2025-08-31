import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 
import { Sparkles, TrendingUp, ArrowRight, Filter, Building2 } from 'lucide-react';
import { Button } from './ui/button';

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <section className='py-20 bg-gradient-to-b from-background to-muted/20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
                        <TrendingUp className='w-4 h-4 text-primary' />
                        <span className='text-sm font-medium text-primary'>Hot Opportunities</span>
                    </div>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
                        Discover <span className='text-gradient'>Amazing</span> Opportunities
                    </h2>
                    <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
                        Explore the latest job openings from top companies and find your perfect match
                    </p>
                </div>
                
                {/* Filters Bar */}
                <div className='flex flex-wrap items-center justify-between gap-4 mb-12 p-6 card-modern'>
                    <div className='flex items-center gap-4'>
                        <span className='text-sm font-medium text-muted-foreground'>Filter by:</span>
                        <div className='flex flex-wrap gap-2'>
                            <button className='badge-modern hover:bg-primary hover:text-white transition-colors cursor-pointer'>
                                All Jobs
                            </button>
                            <button className='badge-modern-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-pointer'>
                                Remote
                            </button>
                            <button className='badge-modern-accent hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'>
                                Full-time
                            </button>
                        </div>
                    </div>
                    <Button variant="outline" className='btn-secondary'>
                        <Filter className='w-4 h-4 mr-2' />
                        Advanced Filters
                    </Button>
                </div>
                
                {/* Jobs Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                    {
                        allJobs.length <= 0 ? (
                            <div className='col-span-full text-center py-16'>
                                <div className='w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6'>
                                    <Sparkles className='w-10 h-10 text-muted-foreground' />
                                </div>
                                <h3 className='text-2xl font-semibold text-foreground mb-3'>No Jobs Available</h3>
                                <p className='text-muted-foreground max-w-md mx-auto'>
                                    We're currently updating our job listings. Check back soon for exciting opportunities!
                                </p>
                            </div>
                        ) : (
                            allJobs?.slice(0,6).map((job, index) => (
                                <div key={job._id} className='animate-fade-in-up' style={{animationDelay: `${index * 0.1}s`}}>
                                    <LatestJobCards job={job}/>
                                </div>
                            ))
                        )
                    }
                </div>
                
                {/* CTA Section */}
                {allJobs.length > 6 && (
                    <div className='text-center'>
                        <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6'>
                            <Sparkles className='w-5 h-5 text-primary' />
                            <span className='font-medium text-primary'>More opportunities waiting for you</span>
                        </div>
                        <Button className='btn-primary text-lg px-8 py-4'>
                            View All Jobs
                            <ArrowRight className='w-5 h-5 ml-2' />
                        </Button>
                    </div>
                )}
                
                {/* Stats Section */}
                <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='text-center p-6 card-modern'>
                        <div className='w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4'>
                            <TrendingUp className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-2xl font-bold text-foreground mb-2'>10K+</h3>
                        <p className='text-muted-foreground'>Active Job Listings</p>
                    </div>
                    <div className='text-center p-6 card-modern'>
                        <div className='w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4'>
                            <Building2 className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-2xl font-bold text-foreground mb-2'>500+</h3>
                        <p className='text-muted-foreground'>Partner Companies</p>
                    </div>
                    <div className='text-center p-6 card-modern'>
                        <div className='w-12 h-12 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
                            <Sparkles className='w-6 h-6 text-white' />
                        </div>
                        <h3 className='text-2xl font-bold text-foreground mb-2'>50K+</h3>
                        <p className='text-muted-foreground'>Successful Placements</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestJobs