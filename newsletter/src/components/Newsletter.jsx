import {formSchema} from '../utils/formSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import mobileImage from '../assets/images/illustration-sign-up-mobile.svg';
import iconList from '../assets/images/icon-list.svg'
import * as styles from './newsletter.module.css';

const Newsletter = () => {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (data) => {
    console.log('hi')
    console.log(data);
  };

  return (
    <div className={styles.newsletter_container}>
      <section className={styles.textContent}>
        <div className={styles.textWrapper}>
          <h1 className="heading">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <div className={styles.listGroup}>
              <img src={iconList} alt="list icon"/>
              <li>Product discovery and building what matters</li>
            </div>
            <div className={styles.listGroup}>
              <img src={iconList} alt="list icon"/>
              <li>Measuring to ensure updates are a success</li>
            </div>
            <div className={styles.listGroup}>
              <img src={iconList} alt="list icon"/>
              <li>And much more!</li>
            </div>
          </ul>
        </div>
        <Form.Root onSubmit={handleSubmit(onSubmit)} className="FormRoot" noValidate>
          <Form.Field className="FormField" name="email">
            <div className={styles.labelGroup}>
              <Form.Label className="FormLabel body-small">Email address</Form.Label>
              {errors.email && (
                <Form.Message className={`FormMessage body-small ${styles.errorMessage}`}>
                  {errors.email.message}
                </Form.Message>
              )}
            </div>
            <input
              {...register('email')}
              type="email"
              required
              className="Input"
              placeholder="email@company.com"
              aria-invalid={errors.email ? 'true' : 'false'}
            />

          </Form.Field>

          <Form.Submit asChild>
            <button className="Button body-bold">
              Subscribe to monthly newsletter
            </button>
          </Form.Submit>
        </Form.Root>


      </section>
      <figure>
        <img src={mobileImage} alt="Illustration of a person checking their phone" className="image"/>
      </figure>
    </div>
  );
};

export default Newsletter;
