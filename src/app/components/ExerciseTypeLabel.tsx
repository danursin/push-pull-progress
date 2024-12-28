import { Label, SemanticCOLORS } from "semantic-ui-react";

import { ExerciseType } from "@/types";

const colorMap: Record<ExerciseType, SemanticCOLORS> = {
    push: "blue",
    pull: "green",
    legs: "orange"
};

const ExerciseTypeLabel = ({ type }: { type: ExerciseType }) => {
    return <Label color={colorMap[type]}>{type}</Label>;
};

export default ExerciseTypeLabel;
