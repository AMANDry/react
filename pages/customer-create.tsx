import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { object, string, TypeOf } from 'zod';

import { createCustomer, getRegions } from '../api/common-api';
import { Loading } from '../components/loading';
import { Regions } from '../types/common';

const registerSchema = object({
  name: string()
    .nonempty('Name is required')
    .min(3, 'Name must be no less than 3 characters'),
  email: string().nonempty('Email is required').email('Email is invalid'),
  namespace: string(),
  regionId: string().nonempty('Region is required'),
});
export type RegisterInput = TypeOf<typeof registerSchema>;

export const CustomerCreate = () => {
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setError,
  } = methods;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [regions, setRegions] = useState<Regions[]>([]);
  const navigate = useNavigate();
  const regionIdValue = getValues('regionId');

  useQuery({
    queryKey: ['getRegions'],
    queryFn: async () => {
      const { data } = await getRegions();
      if (data && Array.isArray(data)) setRegions(data);
    },
  });

  const onSubmit = async (customerData: RegisterInput) => {
    setIsLoading(true);
    const response = await createCustomer(customerData).catch(
      ({ response }) => {
        setIsLoading(false);
        response.data.errors.map((err: any) =>
          setError(err.field, { type: 'custom', message: err.error })
        );
      }
    );

    if (response) {
      setIsLoading(false);
      reset();
      toast.success('New customer is successfully created', {
        theme: 'colored',
      });
      navigate('/customers');
    }
  };

  if (isLoading) return <Loading />;

  return (
    <Box
      data-testid="customer-create-page"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card>
        <FormProvider {...methods}>
          <FormControl
            sx={{ minWidth: 700, maxWidth: 700, padding: '40px 100px' }}
          >
            <CardContent>
              <TextField
                fullWidth
                label="Name"
                variant="standard"
                data-testid="name"
                error={!!errors['name']}
                helperText={errors['name'] ? errors['name'].message : ''}
                {...register('name')}
              />
            </CardContent>
            <CardContent>
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                data-testid="email"
                error={!!errors['email']}
                helperText={errors['email'] ? errors['email'].message : ''}
                {...register('email')}
              />
            </CardContent>
            <CardContent>
              <TextField
                fullWidth
                label="Namespace"
                variant="standard"
                data-testid="namespace"
                error={!!errors['namespace']}
                helperText={
                  errors['namespace'] ? errors['namespace'].message : ''
                }
                {...register('namespace')}
              />
            </CardContent>
            <CardContent>
              <FormControl variant="standard" error={!!errors['regionId']}>
                <InputLabel id="region-id-label">Region</InputLabel>
                <Select
                  labelId="region-id-label"
                  id="region-id"
                  data-testid="regionId"
                  label="Region"
                  defaultValue={regionIdValue ?? ''}
                  sx={{ minWidth: '120px' }}
                  {...register('regionId')}
                >
                  {regions.map((region) => (
                    <MenuItem key={region.id} value={region.id}>
                      {region.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText sx={{ ml: 0 }}>
                  {errors['regionId'] ? errors['regionId'].message : ''}
                </FormHelperText>
              </FormControl>
            </CardContent>
            <CardContent>
              <Stack direction="row">
                <Button
                  type="submit"
                  data-testid="submitForm"
                  onClick={handleSubmit(onSubmit)}
                  variant="contained"
                  color="success"
                  sx={{ mr: 2 }}
                >
                  Add Customer
                </Button>
                <Button
                  onClick={() => navigate('/customers')}
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
              </Stack>
            </CardContent>
          </FormControl>
        </FormProvider>
      </Card>
    </Box>
  );
};
