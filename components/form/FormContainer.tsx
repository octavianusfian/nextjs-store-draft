"use client";

import { ReactNode, useActionState, useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};
const FormContainer = ({
  action,
  children,
}: {
  action: actionFunction;
  children: ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast("Success", {
        description: <span className="text-green-500">{state.message}</span>,
      });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
