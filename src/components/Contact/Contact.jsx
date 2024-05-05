import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({
  contactItem: { name, number, id },
  onDelete,
}) {
  return (
    <div className={css.contactCard}>
      <div>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
