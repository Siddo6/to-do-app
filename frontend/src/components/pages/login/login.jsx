import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router';

import { LoginSchema } from '@/components/schema/login.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { loginUser } from '@/services/auth.service';

export default function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState(null);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values) {
    setServerError(null);
    try {
      await loginUser(values);
      navigate('/tasks');
    } catch (error) {
      const message =
        error?.data?.error?.message ||
        error?.data?.message ||
        'Login failed. Please check your credentials.';
      setServerError(message);
    }
  }

  return (
    <section className="flex flex-col min-h-screen w-full justify-center items-center">
      <Card className="font-['lora']">
        <CardHeader >
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="password" placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {serverError && (
                <p className="text-sm text-red-500">{serverError}</p>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link className="text-sky-500 hover:text-sky-700 basis-1/2 text-xs" to="/signup">Don&apos;t have an account?</Link>
              <Button className="text-white uppercase" type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Signing in...' : 'Sign in'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </section>
  );
}
