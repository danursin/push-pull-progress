"use client";

import { Button, Form, Modal } from "semantic-ui-react";
import { useContext, useState } from "react";

import { AppContext } from "./AppContext";
import TimeDisplay from "./TimeDisplay";
import { calculateWorkoutDuration } from "../services/workoutService";

const WorkoutSettingsForm: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const { workoutSettings, setWorkoutSettings } = useContext(AppContext);

    const onCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Button type="button" icon="cog" onClick={() => setModalOpen(true)} />
            <Modal as={Form} onSubmit={onCloseModal} closeIcon open={modalOpen} onClose={onCloseModal}>
                <Modal.Header>
                    Workout Duration: <TimeDisplay seconds={calculateWorkoutDuration(workoutSettings)} />
                </Modal.Header>
                <Modal.Content>
                    <Form.Input
                        required
                        type="number"
                        label="Number of Sets"
                        placeholder="e.g., 4"
                        value={workoutSettings.sets}
                        onChange={(e, { value }) => setWorkoutSettings({ ...workoutSettings, sets: parseInt(value) })}
                        min={1}
                        step={1}
                    />
                    <Form.Input
                        required
                        label="Reps per Set"
                        type="number"
                        placeholder="e.g., 12"
                        value={workoutSettings.reps}
                        onChange={(e, { value }) => setWorkoutSettings({ ...workoutSettings, reps: parseInt(value) })}
                        min={1}
                        step={1}
                    />
                    <Form.Input
                        required
                        label="Duration of Each Rep in Seconds"
                        type="number"
                        placeholder="e.g., 30"
                        value={workoutSettings.duration}
                        onChange={(e, { value }) => setWorkoutSettings({ ...workoutSettings, duration: parseInt(value) })}
                        min={1}
                        step={1}
                    />
                    <Form.Input
                        required
                        type="number"
                        label="Rest Between Sets in Seconds"
                        placeholder="e.g., 60"
                        value={workoutSettings.rest}
                        onChange={(e, { value }) => setWorkoutSettings({ ...workoutSettings, rest: parseInt(value) })}
                        min={1}
                        step={1}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Form.Button type="submit" color="blue" content="Save Settings" />
                </Modal.Actions>
            </Modal>
        </>
    );
};

export default WorkoutSettingsForm;
