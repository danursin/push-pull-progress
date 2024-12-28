export type ExerciseType = "push" | "pull" | "legs";

export type Exercise = {
    imageSrc: string;
    type: ExerciseType;
    name: string;
    link: string | null;
    musclesWorked: string[];
    instructions: string;
}

export type WorkoutSettings = {
    /** The duration of each rep in seconds */
    duration: number;
    /** The number of sets to perform */
    sets: number;
    /** The number of reps per set */
    reps: number;
    /** The duration of rest between sets in seconds */
    rest: number;
};