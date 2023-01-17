import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormikHelpers } from "formik";
import ContactUsForm from "./components/ContactUsForm";

test("rendering and submitting Contact Us form", async () => {
  const handleSubmit = (
    values: { name: string },
    { setSubmitting }: FormikHelpers<{ name: string }>
  ) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  render(<ContactUsForm />);
  const user = userEvent.setup();
  await user.type(screen.getByPlaceholderText(/Your name/i), "Del");
  await user.type(screen.getByPlaceholderText(/Company/i), 'My New Company')
  await user.type(screen.getByPlaceholderText(/Telephone/i), "+447849123456");
  await user.type(screen.getByPlaceholderText(/Email address/i), "hi@mail.com");
  await user.type(screen.getByPlaceholderText(/Enter a message.../i), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate mattis libero, a aliquam nunc gravida eu. Morbi ut auctor purus. Cras vulputate velit ut sapien viverra, a pellentesque tellus ornare. Aliquam vitae urna quis ligula laoreet scelerisque nec vel ante. Proin vel nunc blandit, lobortis turpis placerat, ullamcorper dolor.");

  await user.click(screen.getByRole("button", { name: /send/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      name: "Del",
      company: "My New Company",
      telephone: "+44789123456",
      email: "hi@mail.com",
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate mattis libero, a aliquam nunc gravida eu. Morbi ut auctor purus. Cras vulputate velit ut sapien viverra, a pellentesque tellus ornare. Aliquam vitae urna quis ligula laoreet scelerisque nec vel ante. Proin vel nunc blandit, lobortis turpis placerat, ullamcorper dolor."
    })
  );
});
