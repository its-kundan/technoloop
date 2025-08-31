import React from 'react'
import { Button } from './ui/button'
import { Bookmark, MapPin, Clock, DollarSign } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <div className='card-modern p-6 hover-lift'>
            <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Clock className='w-4 h-4' />
                    <span>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</span>
                </div>
                <Button variant="outline" className="rounded-full hover:bg-accent" size="icon">
                    <Bookmark className='w-4 h-4' />
                </Button>
            </div>

            <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 gradient-primary rounded-xl flex items-center justify-center'>
                    <Avatar className='w-8 h-8'>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </div>
                <div>
                    <h3 className='font-semibold text-foreground'>{job?.company?.name}</h3>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                        <MapPin className='w-3 h-3' />
                        <span>India</span>
                    </div>
                </div>
            </div>

            <div className='mb-4'>
                <h2 className='font-bold text-xl text-foreground mb-2'>{job?.title}</h2>
                <p className='text-sm text-muted-foreground leading-relaxed line-clamp-2'>{job?.description}</p>
            </div>
            
            <div className='flex flex-wrap items-center gap-2 mb-4'>
                <Badge className='badge-modern'>{job?.position} Positions</Badge>
                <Badge className='badge-modern-secondary'>{job?.jobType}</Badge>
                <Badge className='badge-modern-accent'>
                    <DollarSign className='w-3 h-3 mr-1' />
                    {job?.salary}LPA
                </Badge>
            </div>
            
            <div className='flex items-center gap-3 pt-4 border-t border-border/50'>
                <Button 
                    onClick={() => navigate(`/description/${job?._id}`)} 
                    variant="outline" 
                    className='btn-secondary flex-1'
                >
                    View Details
                </Button>
                <Button className='btn-primary flex-1'>
                    Save Job
                </Button>
            </div>
        </div>
    )
}

export default Job