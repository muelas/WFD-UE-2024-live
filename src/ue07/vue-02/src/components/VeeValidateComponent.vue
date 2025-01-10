<script setup lang="ts">
import {Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from "yup";

function onSubmit(values: any) {
  console.log(values);
}

const emailRule = yup.string().email();
</script>

<template>
  <Form @submit="onSubmit">
    <Field name="email" type="email" :rules="emailRule"></Field>
    <ErrorMessage name="email"></ErrorMessage>
  </Form>
</template>

<style scoped>

</style>
