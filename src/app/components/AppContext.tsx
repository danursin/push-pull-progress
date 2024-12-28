"use client";

import { createContext, useState } from "react";

import { WorkoutSettings } from "@/types";

export type AppContextProps = {
    workoutSettings: WorkoutSettings;
    setWorkoutSettings: React.Dispatch<React.SetStateAction<WorkoutSettings>>;
};

export const AppContext = createContext<AppContextProps>({
    workoutSettings: {
        duration: -1,
        sets: -1,
        reps: -1,
        rest: -1
    },
    setWorkoutSettings: () => {}
});

const AppContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [workoutSettings, setWorkoutSettings] = useState<WorkoutSettings>({
        duration: 5,
        sets: 3,
        reps: 10,
        rest: 30
    });

    return <AppContext.Provider value={{ workoutSettings, setWorkoutSettings }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
