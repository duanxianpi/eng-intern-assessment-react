import React, { createContext } from 'react'
import {StopWatchStatus} from './App'

//use context to pass data to child components
export interface SWContextType {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;

    startTime: number;
    setStartTime: React.Dispatch<React.SetStateAction<number>>;
    
    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;

    lapNumber: number;
    setLapNumber: React.Dispatch<React.SetStateAction<number>>;

    status: StopWatchStatus;
    setStatus: React.Dispatch<React.SetStateAction<StopWatchStatus>>;
}

const SWContext = createContext<SWContextType>({} as SWContextType);
export default SWContext;
