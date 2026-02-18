// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import "./ContactForm.scss";
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';

interface ContactFormType {
  id: string;
  theme?: "light" | "dark";
}

function ContactForm({ id, theme }: ContactFormType) {
  const [state, handleSubmit] = useForm("xzdazqzp");

  const { t } = useTranslation();

  if (state.succeeded) {
      return <p>{t("contact.submited")}</p>;
  }

  return (
    <form className={`contact-form ${theme ? `contact-form-${theme}` : ""}`} onSubmit={handleSubmit} id={`${id}-form`}>
      <input type="hidden" name="subject" value={id ? `Nouveau message à propos de: ${id}` : "Nouveau message"} />
      <label htmlFor="email">
        {t("contact.email")}
      </label>
      <input
        id={`${id}-email`}
        type="email" 
        name={`${id}-email`}
        required
      />
      <ValidationError 
        prefix="Email" 
        field={`${id}-email`}
        errors={state.errors}
      />
      <label htmlFor="message">
        {t("contact.message")}
      </label>
      <textarea
        id={`${id}-message`}
        name={`${id}-message`}
        required
      />
      <ValidationError 
        prefix="Message" 
        field={`${id}-message`}
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className={`btn ${theme === "light" ? "" : "btn-white"}`}>
        {t("contact.submit")}
      </button>
    </form>
  );
}

export default ContactForm;