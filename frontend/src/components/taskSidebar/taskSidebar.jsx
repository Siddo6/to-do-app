import PropTypes from "prop-types";
import { Card } from "@/components/ui/card";
import { CreateTaskForm } from "../createTaskForm/createTaskForm.jsx";
import { UserProfile } from "../userProfile/userProfile.jsx";
import styles from "./taskSidebar.module.css";

export function TaskSidebar({ onTaskCreated }) {
  return (
    <section className={`fixed right-4 top-4 ${styles.sidebarHeight}`}>
      <Card className="flex flex-col w-full h-full p-6 justify-between">
        <UserProfile />
        <CreateTaskForm onTaskCreated={onTaskCreated} />
      </Card>
    </section>
  );
}

TaskSidebar.propTypes = {
  onTaskCreated: PropTypes.func.isRequired,
};
