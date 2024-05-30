import {formSchema} from '../../utils/formSchema.js';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import MobileImage from "../images/MobileImage.jsx";
import DesktopImage from "../images/DesktopImage.jsx";
import IconList from "../images/IconList.jsx";
import Button from "../button/Button.jsx";
import * as styles from './newsletter.module.css';
import {useEffect, useState} from "react";

const Newsletter = ({setEmail}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    handleMediaQueryChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (data) => {
    setEmail(data.email);
  };

  return (
    <div className={styles.newsletter_container}>
      <section className={styles.textContent}>
        <div className={styles.textWrapper}>
          <h1 className="heading">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li className={styles.listGroup}>
              <IconList/>
              <span>Product discovery and building what matters</span>
            </li>
            <li className={styles.listGroup}>
              <IconList/>
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li className={styles.listGroup}>
              <IconList/>
              <span>And much more!</span>
            </li>
          </ul>
        </div>
        <Form.Root onSubmit={handleSubmit(onSubmit)} className={styles.formRoot} noValidate>
          <Form.Field className={styles.formField} name="email">
            <div className={styles.labelGroup}>
              <Form.Label className="FormLabel body-small">Email address</Form.Label>
              {errors.email && (
                <Form.Message className={`FormMessage body-small ${errors.email && styles.errorMessage}`}>
                  {errors.email.message}
                </Form.Message>
              )}
            </div>
            <input
              {...register('email')}
              type="email"
              required
              className={`${styles.input} ${errors.email && styles.errorInput}`}
              placeholder="email@company.com"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
          </Form.Field>
          <Form.Submit asChild>
            <Button
              label="Subscribe to monthly newsletter"
            />
          </Form.Submit>
        </Form.Root>
      </section>
      <figure>
        {isMobile ? <MobileImage/> : <DesktopImage/>}
      </figure>
    </div>
  );
};

export default Newsletter;
