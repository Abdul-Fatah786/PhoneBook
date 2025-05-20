import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./Config/firebaseConfig";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import ContactCard from "./Components/ContactCard";
import Navbar from "./Components/Navbar";
import AddUpdate from "./Components/AddUpdate";
import useDisclose from "./hooks/useDisclose";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const { hanldeisOpen, onClose, isOpen } = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contatRef = collection(db, "Contacts");

        onSnapshot(contatRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);
          console.log(contactsList);
          return contactsList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filteredContacts = (e) => {
    const searchValue = e.target.value.toLowerCase();

    try {
      const contactRef = collection(db, "Contacts");

      onSnapshot(contactRef, (snapshot) => {
        const contactsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredContacts = contactsList.filter(
          (contact) =>
            contact.Name && contact.Name.toLowerCase().includes(searchValue)
        );

        setContacts(filteredContacts);
        console.log(filteredContacts);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="mx-auto mx-w-[370px] px-3">
        <Navbar />
        <div className="flex gap-2 relative items-center">
          <FiSearch className=" absolute ml-1 text-3xl text-white" />
          <input
            onChange={filteredContacts}
            type="text"
            className=" h-10 border bg-transparent text-white pl-9 flex-grow border-white rounded"
          />
          <AiFillPlusCircle
            onClick={hanldeisOpen}
            className=" cursor-pointer text-white text-5xl"
          />
        </div>
        <div className="mt-4 gap-4 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.Name}
              email={contact.Email}
            />
          ))}
        </div>
      </div>
      <AddUpdate onClose={onClose} isOpen={isOpen} />{" "}
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
