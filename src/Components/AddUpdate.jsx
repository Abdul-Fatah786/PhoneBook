/* eslint-disable react/prop-types */
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../Config/firebaseConfig";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

const AddUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  // Add Contact
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "Contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Succesfully");
      console.log("Contact Added");
    } catch (error) {
      console.error(error);
    }
  };

  // Update Contact
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "Contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Succesfully");
      console.log("Contact Updated");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          // validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  Name: contact.name,
                  Email: contact.email,
                }
              : {
                  Name: "",
                  Email: "",
                }
          }
          onSubmit={(values) => {
            // console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name">Name</label>
              <Field name="Name" className="border h-10 rounded-lg" />
              <ErrorMessage
                name="Name"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="Email">Email</label>
              <Field name="Email" className="border h-10 rounded-lg" />
            </div>
            <button
              type="submit"
              className="bg-orange px-3 py-1.5 border self-end"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdate;
