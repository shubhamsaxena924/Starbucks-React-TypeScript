import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DialogModal from "../components/DialogModal";

interface Props {}

const NotFound: React.FC<Props> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsDialogOpen(() => true), 200);
  }, []);
  return (
    <div className="flex items-center justify-center h-96 bg-primary-200">
      <h1 className="text-2xl font-semibold text-pinterest">Page not found</h1>
      <DialogModal
        title="Page Not Found"
        desc="Sorry for the inconvenience"
        buttonText="OK"
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default React.memo(NotFound);
