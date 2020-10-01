import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import ContactForm from './ContactForm'


test("renders First Name without crashing",async () => {
    render(<ContactForm/>);
    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    
    const input = screen.getByRole("button", {type:/submit/i})
  
    fireEvent.change(firstNameInput, {target:{name:'firstName', value:'Duk'}});
    fireEvent.change(lastNameInput, {target:{name:'lastName', value:'Kangaroo'}});
    fireEvent.change(emailInput, {target:{name:'email', value:'"Fingerbanganoragatang@hotmail.com"'}});
    fireEvent.change(messageInput, {target:{name:'message', value:''}});
    fireEvent.click(input)

    const newName = screen.findByText(/Mia!/i)
    expect(await screen.findByTestId(/gonna-cry/i)).toBeInTheDocument()
  })
  
//   test("", () => {
//       render(<ContactForm/>);
//     const ContactForm = screen.getByText(/Mia!/i);
//     expect(ContactForm).toBeInTheDocument();
//   })
  test("", () => {
  
  })