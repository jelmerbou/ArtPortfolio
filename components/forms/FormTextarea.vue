<template>
    <div>
        <label class="mb-3 float-left block text-base font-medium text-[#07074D]" :for="label">{{ label }}</label>

        <textarea rows="5" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[lightGray] focus:shadow-md"  :name="label" :placeholder="placeholder" :value="modelValue" @input="updateValue($event)" :rows="rows" id="">
            <div v-if="error" class="error">{{ error }}</div>
        </textarea>
    </div>
</template>

<script setup>
    const props = defineProps({
        modelValue: String,  
        label: String,
        placeholder: String,
        rows: Number,
        error: String
    });

    const emit = defineEmits(['update:modelValue']);

    const updateValue = ($event) => {
        emit('update:modelValue', $event.target.value);
    };
</script>