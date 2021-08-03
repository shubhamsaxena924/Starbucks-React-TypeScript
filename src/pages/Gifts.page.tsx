import React, { useEffect } from "react";
import { useState } from "react";
import DialogModal from "../components/DialogModal";

interface Props {}

const Gifts: React.FC<Props> = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsDialogOpen(() => true), 200);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-primary-200">
      <h1 className="text-2xl font-semibold text-pinterest">Gifts Page</h1>
      <p className="text-xl font-semibold text-pinterest">
        This page is under maintenance.
      </p>
      <DialogModal
        title="Page Under Maintenance"
        desc="Sorry for the inconvenience"
        buttonText="OK"
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default React.memo(Gifts);
