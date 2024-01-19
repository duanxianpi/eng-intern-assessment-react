import React, { useState, useCallback } from 'react';
import SWContext, {SWContextType} from './SWContext';
import {StopWatchStatus} from './App'

export const SWContextProvider: React.FC = ({ children }) => {
    const [startTime, setStartTime] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [lapNumber, setLapNumber] = useState<number>(1)
    const [status, setStatus] = useState<StopWatchStatus>(StopWatchStatus.Stoped)

    const contextValue: SWContextType = {
        startTime,
        setStartTime,
        currentTime,
        setCurrentTime,
        lapNumber,
        setLapNumber,
        status,
        setStatus
    };

    return (
        <SWContext.Provider value={contextValue}>
            {children}
        </SWContext.Provider>
    );
};
