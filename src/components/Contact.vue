<template>
    <div id="contact" class="h-100">
        <div class="pt-1 pb-3 flex-center flex-col">
            <h1 class="font-bold text-center text-4xl">contact.</h1>
            <div class="border-b-2 border-gray-400 h-1 w-1/2"></div>
        </div>
        <div>
            <form class="flex-center flex-col">
                <label for="name-input">Name</label>
                <input type="text" id="name-input" name="name-input" />
                <label for="email-input">Email</label>
                <input type="email" id="email-input" name="email-input" />
                <label for="message-input">Message</label>
                <textarea id="message-input" name="message-input"></textarea>

                <div>
                    <button type="submit" onclick="console.log('submit message')">Submit</button>
                </div>
            </form>
        </div>

    </div>



</template>