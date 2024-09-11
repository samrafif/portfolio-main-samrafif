<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
  import ContactForm from "../components/ContactForm.svelte";
  import LayoutFlexRow from "../components/LayoutFlexRow.svelte";
  import LayoutFlexColumn from "../components/LayoutFlexColumn.svelte";
  import { writable } from "svelte/store";
  import { createContactMessage } from "../db";
  import Icon from "@iconify/svelte";

  let contactMessageState = writable({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  function onClick() {
    createContactMessage(
      $contactMessageState.name,
      $contactMessageState.email,
      $contactMessageState.website,
      $contactMessageState.message
    );

    contactMessageState.set({
      name: "",
      email: "",
      website: "",
      message: "",
    });
  }
</script>

<main>
  <OnMount>
    <div class="contact-container" in:fly={{ y: -50, duration: 1000 }}>
      <h1>Contact</h1>
      <br />
      <!-- TODO: Use fancy stores for this rather than repetitive CSS  -->
      <!-- TODO: Standardize class names  -->
      <div class="contact-body-container">
        <ContactForm {contactMessageState} {onClick} />
        <LayoutFlexColumn>
          <h1>Lets talk.. like for a job</h1>
          <p>
            I will get your project done, buuuuuuuut...
            <br />
            I'll give what you paid for sooo ehem pay me lots baby
          </p>
          <br />
          <p><b>Find more of me here</b></p>
          <LayoutFlexRow wrap="wrap">
            <!-- TODO: Extract to component -->
            <button
              ><Icon
                height="30px"
                style="padding: 0.3rem 0 0.3rem;"
                icon="mdi:github"
              /></button
            >
            <button
              ><Icon
                height="30px"
                style="padding: 0.3rem 0 0.3rem;"
                icon="mdi:instagram"
              /></button
            >
            <button
              ><Icon
                height="30px"
                style="padding: 0.3rem 0 0.3rem;"
                icon="mdi:linkedin"
              /></button
            >
            <button
              ><Icon
                height="30px"
                style="padding: 0.3rem 0 0.3rem;"
                icon="icon-park-outline:dribble"
              /></button
            >
            <button
              ><Icon
                height="30px"
                style="padding: 0.3rem 0 0.3rem;"
                icon="ic:baseline-discord"
              /></button
            >
          </LayoutFlexRow>
        </LayoutFlexColumn>
      </div>
    </div>
  </OnMount>
</main>

<style>
  p {
    margin: 0;
  }

  .contact-body-container {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  @media screen and (max-width: 850px) {
    .contact-body-container {
      flex-direction: column;
    }
  }
</style>
