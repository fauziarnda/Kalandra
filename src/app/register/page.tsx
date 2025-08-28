import AuthLayout from '@/components/layout/AuthLayout';
import { RegisterForm } from '@/components/register-form';

export default function LoginPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
