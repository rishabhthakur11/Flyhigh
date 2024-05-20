import { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Sign In | Bribbble',
  description:
    'Sign in to your Bribbble account, the world’s leading community for designers to share, grow, and get hired.'
};

export default function SignInPage() {
  return (
    <>
      <section className='flex flex-col flex-1 overflow-auto justify-center w-full'>
        <main className='flex justify-center xl:justify-start grow items-center w-full h-full'>
          <div className='xl:ml-28'>
            <SignIn />
          </div>
        </main>
      </section>
    </>
  );
}
