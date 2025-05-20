import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../Config/firebaseConfig";
import { toast } from "react-toastify";
import AddUpdate from "./AddUpdate";
import useDisclose from "../hooks/useDisclose";

const ContactCard = (contact) => {
  const { hanldeisOpen, onClose, isOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "Contacts", id));
      toast.success("Contact Deleted Succesfully");
      console.log("Contact Deleted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className=" flex bg-yellow justify-between items-center p-2 rounded-lg"
      >
        <div className="flex gap-1">
          <HiOutlineUser className="text-orange text-4xl" />
          <div>
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex  text-3xl">
          <RiEditCircleLine onClick={hanldeisOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ContactCard;
