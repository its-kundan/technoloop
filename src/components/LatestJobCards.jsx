import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { MapPin, Clock, DollarSign, ArrowRight, Building2 } from 'lucide-react'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='group card-modern p-6 cursor-pointer hover-lift relative overflow-hidden'
        >
            {/* Background gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            <div className='relative z-10'>
                {/* Header */}
                <div className='flex items-start justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-modern'>
                            <Building2 className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <h3 className='font-semibold text-foreground group-hover:text-primary transition-colors'>
                                {job?.company?.name || 'Company Name'}
                            </h3>
                            <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                <MapPin className='w-3 h-3' />
                                <span>Remote / Worldwide</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end gap-2'>
                        <Badge className='badge-modern text-xs'>
                            {job?.jobType || 'Full-time'}
                        </Badge>
                        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                    </div>
                </div>
                
                {/* Job Title */}
                <h2 className='text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300'>
                    {job?.title || 'Job Title'}
                </h2>
                
                {/* Description */}
                <p className='text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2'>
                    {job?.description || 'Join our dynamic team and contribute to innovative projects that make a real impact.'}
                </p>
                
                {/* Skills/Tags */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='badge-modern-secondary text-xs'>React</span>
                    <span className='badge-modern-accent text-xs'>Node.js</span>
                    <span className='badge-modern text-xs'>TypeScript</span>
                </div>
                
                {/* Footer */}
                <div className='flex items-center justify-between pt-4 border-t border-border/50'>
                    <div className='flex items-center gap-4 text-sm'>
                        <div className='flex items-center gap-1 text-muted-foreground'>
                            <Clock className='w-4 h-4' />
                            <span>2 days ago</span>
                        </div>
                        <div className='flex items-center gap-1 text-primary font-semibold'>
                            <DollarSign className='w-4 h-4' />
                            <span>{job?.salary || '80K'} - {job?.salary ? job.salary + 20 : '120K'}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300'>
                        <span className='text-sm font-medium'>Apply</span>
                        <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                    </div>
                </div>
            </div>
            
            {/* Hover effect border */}
            <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-300'></div>
        </div>
    )
}

export default LatestJobCards