import { useState } from "react";
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PropTypes from "prop-types";
import { Switch } from "@/components/ui/switch";
import { Trash2 } from "lucide-react";

export function Task(props) {
  const {
    _id,
    title = "This is a default title",
    description = "Description of the task",
    status = "todo",
    priority = "normal",
    dueDate,
    onUpdate,
    onDelete,
  } = props;

  const [taskStatus, setTaskStatus] = useState(status);
  const [busy, setBusy] = useState(false);

  const formattedDate = dueDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  async function handleSwitchChange(checked) {
    const newStatus = checked ? "inProgress" : "todo";
    setTaskStatus(newStatus);
    setBusy(true);
    try {
      await onUpdate({ _id, status: newStatus });
    } finally {
      setBusy(false);
    }
  }

  async function handleCompleted() {
    setBusy(true);
    try {
      await onUpdate({ _id, status: "completed" });
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    setBusy(true);
    try {
      await onDelete(_id);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card className="w-full mb-4 font-['lora']">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div>
          <Badge className="mr-2 uppercase" variant="outline">{formattedDate}</Badge>

          {priority === "normal" && <Badge variant="outline" className="uppercase">{priority}</Badge>}
          {priority === "high"   && <Badge variant="outline" className="uppercase">{priority}</Badge>}
          {priority === "low"    && <Badge variant="outline" className="uppercase">{priority}</Badge>}
        </div>
      </CardHeader>

      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between">
        <div className="flex flex-row items-center gap-4">
          <Switch
            checked={taskStatus === "inProgress"}
            onCheckedChange={handleSwitchChange}
            disabled={busy || taskStatus === "completed"}
            id={`in-progress-${_id}`}
          />
          <Label htmlFor={`in-progress-${_id}`}>In Progress</Label>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleDelete} disabled={busy}>
            <Trash2 className="h-4 w-4 text-red-400" />
          </Button>

          <Button className="text-white" onClick={handleCompleted} disabled={busy || taskStatus === "completed"}>
            {taskStatus === "completed" ? "Done ✓" : "Completed"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

Task.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(["todo", "inProgress", "completed"]),
  priority: PropTypes.oneOf(["low", "normal", "high"]),
  dueDate: PropTypes.instanceOf(Date).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
