<template>
    <div>
        <label class="mb-3 float-left block text-base font-medium text-[#07074D]" :for="label">{{ label }}</label>
        <input class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[lightGray] focus:shadow-md" :type="type" :name="label" :placeholder="placeholder" :value="modelValue" @input="onInput">

        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        label: String,
        type:{
            type: String,
            default: 'text'
        },
        modelValue: String,
        placeholder: String,
        error: String
    });

    const emit = defineEmits(['update:modelValue']);

    const onInput = ($event) => {
        emit('update:modelValue', $event.target.value);
    };
</script>