"use client";
import { redirect } from "next/navigation";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { useAuth } from "@clerk/nextjs";

const CreateProject = () => {
  const { userId, isSignedIn } = useAuth();

  if (!isSignedIn) redirect("/");

  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>
      <ProjectForm type="create" userId={userId} />
    </Modal>
  );
};

export default CreateProject;
