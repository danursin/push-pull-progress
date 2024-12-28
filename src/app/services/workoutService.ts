import { WorkoutSettings } from "@/types";

/** Calculate the total duration of a workout in seconds */
export const calculateWorkoutDuration = (workoutSettings: WorkoutSettings) => {
    return workoutSettings.sets * (workoutSettings.reps * workoutSettings.duration + workoutSettings.rest);
}