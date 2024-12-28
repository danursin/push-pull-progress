"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";

import ExerciseTypeLabel from "./ExerciseTypeLabel";
import { exercises } from "../services/exerciseService";
import { useState } from "react";

const ExerciseSelectionForm: React.FC = () => {
    const [selectedMap, setSelectedMap] = useState<Record<string, boolean>>({});

    const toggleSelected = (exerciseName: string) => {
        setSelectedMap((prevMap) => ({
            ...prevMap,
            [exerciseName]: !prevMap[exerciseName]
        }));
    };

    return (
        <>
            {exercises.map((exercise) => {
                const isSelected = !!selectedMap[exercise.name];
                return (
                    <Card fluid centered key={exercise.name}>
                        <CardContent>
                            <CardHeader style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Button
                                    icon={isSelected ? "circle check" : "circle outline"}
                                    basic
                                    color={isSelected ? "blue" : undefined}
                                    onClick={() => toggleSelected(exercise.name)}
                                />
                                {exercise.name}
                                <ExerciseTypeLabel type={exercise.type} />
                            </CardHeader>
                        </CardContent>
                        <CardContent>
                            <Image src={exercise.imageSrc} size="medium" centered alt={exercise.name} style={{ display: "block" }} />
                        </CardContent>
                        <CardContent>
                            <CardMeta>{exercise.musclesWorked.join(", ")}</CardMeta>
                            <CardDescription>{exercise.instructions}</CardDescription>
                        </CardContent>
                        {exercise.link && (
                            <CardContent extra>
                                <a href={exercise.link} target="_blank" rel="noreferrer">
                                    Learn more <Icon name="external alternate" />
                                </a>
                            </CardContent>
                        )}
                    </Card>
                );
            })}
        </>
    );
};

export default ExerciseSelectionForm;
