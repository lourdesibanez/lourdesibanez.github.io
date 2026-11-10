---
title: "UX/UI Design: Medical Emergencies"
kicker: "UX / UI · University final project"
summary: "Design of a mobile app for managing medical emergencies, from research to the rationale behind every screen."
cardSummary: "Final project featuring empathy maps, journey maps and competitive benchmarking."
order: 7
categories: [diseno]
tags: ["Figma"]
cover: { src: "/assets/assist/logo-assist.webp", alt: "ASSIST logo, a medical emergency app", fit: "logo" }
hero: { fit: "logo", images: [ { src: "/assets/assist/logo-assist.webp", alt: "ASSIST logo, a medical emergency app" } ] }
facts:
  - { label: "Type", value: "Final project (TPI)" }
  - { label: "Course", value: "User Interface Design" }
  - { label: "School", value: "Engineering · UNLPam" }
  - { label: "Date", value: "June 2026" }
  - { label: "Team", value: "4 members" }
  - { label: "Tools", value: "Figma" }
links:
  - { label: "View prototype", href: "https://www.figma.com/design/dPyZp3UCcPhFhrMr6JAx0P/App-Emergencias-Medicas?node-id=0-1&p=f&t=zJcRQawprpCKk3Oo-0", kind: "figma" }
gallery:
  variant: "default"
  items:
    - { src: "/assets/assist/Iniciar%20Sesion.webp", alt: "ASSIST login screen", caption: "Login" }
    - { src: "/assets/assist/Registro.webp", alt: "User sign-up screen with national ID", caption: "User sign-up" }
    - { src: "/assets/assist/Cuenta%20regresiva%20emergencia.webp", alt: "Countdown screen while assistance is being located", caption: "Request in progress: countdown" }
    - { src: "/assets/assist/Ambulancia%20encontrada.webp", alt: "Map showing the ambulance on its way and the estimated arrival time", caption: "Ambulance assigned, tracked on the map" }
    - { src: "/assets/assist/Ambulancia%20en%20destino.webp", alt: "Notice that the ambulance has arrived", caption: "Ambulance has arrived" }
    - { src: "/assets/assist/Asistencia%20no%20encontrada.webp", alt: "Notice that no assistance was available", caption: "Status: no assistance available" }
    - { src: "/assets/assist/Solicitud%20cancelada.webp", alt: "Notice of a cancelled emergency request", caption: "Request cancelled by the user" }
    - { src: "/assets/assist/Hospitales%20Cercanos.webp", alt: "Map with hospitals near the user's location", caption: "Nearby hospitals" }
    - { src: "/assets/assist/Historial%20medico.webp", alt: "Timeline of the patient's medical history", caption: "Centralized medical history" }
    - { src: "/assets/assist/Doctor%20de%20confianza.webp", alt: "Screen with the trusted doctor's details and notes", caption: "Trusted doctor and follow-up notes" }
    - { src: "/assets/assist/Mi%20perfil.webp", alt: "Profile screen with personal information and emergency contacts", caption: "My profile and emergency contacts" }
    - { src: "/assets/assist/Configuracion.webp", alt: "Settings screen for privacy and quick access", caption: "Settings: privacy and quick access" }
    - { src: "/assets/assist/image%201.webp", alt: "Color palette of the ASSIST design system", caption: "Color palette" }
---

## The challenge

In a medical emergency, every extra step you ask of the user is a real barrier. Many people struggle to request help immediately and without mistakes, which delays the response from health services. ASSIST was created to solve that: an app that streamlines communication between patients and medical centers through an emergency button that automatically sends the patient's location and medical information, with no intermediate steps.

It was my final project for the User Interface Design course (School of Engineering, UNLPam), done as a team with Mariano Salto, Micaela Alemany and Agustín Squizziatto.

## My role

We worked through all four stages of the project without a fixed division of tasks: interviews, empathy maps, competitive analysis, design proposal and Figma prototyping were all put together by the four of us at each stage, rather than each person taking a section.

## Research process

We started with a **stakeholder map** to identify everyone involved in the ecosystem of an emergency: at the core, the Assist system; around it, the primary users (patient, guardian, doctor, nurse, ambulance); and in the outer layers, secondary users, external actors and contextual factors such as health policies.

In parallel, we carried out **desk research** on health organizations, regulations and academic publications, organized into a source matrix and a findings table. From there we defined the general objective—identifying the obstacles to requesting medical assistance in an emergency—and the specific one, focused on the difficulties older adults face with this kind of app. Our hypotheses: fewer steps increase the likelihood of completing the request, and a simpler, visually clearer interface improves usability for that group.

## Field findings

We interviewed three key profiles: an **older woman**, a **Nursing lecturer** and an **advanced Nursing student** (we weren't able to reach practicing staff within healthcare institutions). The same barriers came up in all three cases: delays in asking for help and difficulty giving accurate information under stress. The older woman's profile also added distrust of digital apps and reliance on others for anything tech-related.

From there we built three **empathy maps**. The older woman's was the most decisive for the design: her main pain point is being alone and unable to call for help, and her main gain is that her family can look out for her remotely without invading her privacy. That defined the need for a minimal, trustworthy, single-action interface.

With that profile we created a single **user persona**: Susana, an older woman who lives alone and only uses basic messaging apps. Her core motivation is autonomy—triggering an emergency with a single gesture, without depending on anyone—and her biggest frustration is her distrust of anything digital.

Susana's **experience map** covered the before, during and after of an emergency. The critical moment is the "during": her emotional state escalates to fear and confusion, she can't find the emergency numbers and can't explain what's happening to her. The design opportunity that came out of this was clear: automatic communication and shared location, without asking the user for any additional action.

## Competitive analysis

We analyzed three existing apps—PulsePoint, Shamman and CodigoRojo—based on public information, since they require a subscription. None of them fully addressed the needs of a non-technical user in an emergency: PulsePoint suffered from visual overload, Shamman had a steep learning curve designed for medical staff, and CodigoRojo—the closest in concept to ASSIST—had good visual hierarchy but little contextual information while waiting. That's where we found ASSIST's niche: a minimal, single-action interface with automatic information sharing.

## Design proposal

Every interface decision followed one premise: trigger an emergency request in as few steps as possible, even under stress or with reduced capacity.

- **Medical history and automatic linking:** with just a national ID number, first name and last name, the app links the patient's medical records by querying the medical centers where they are registered
- **Real-time tracking:** once the request is confirmed, the patient and their companion can see the ambulance's route and estimated arrival time on the map
- **My Health, Trusted Doctor and Settings:** consultation and vaccination history, a go-to healthcare professional with their follow-up notes, and privacy controls over which medical information is shown on the lock screen

## Evaluation and improvements

During the presentation, lecturers and classmates raised two points: what happens when the user can't even touch the screen, and how clear the confirmation of the help request is. We had envisioned an emergency widget on the phone's home screen, but when we analyzed the case of someone who can't even unlock their phone, we realized it still relied on physical interaction. So we added two configurable activation alternatives: the device's side button and voice commands, neither of which requires unlocking the phone or opening the app. We also reworked the countdown screen so the "request in progress" state is more explicit and reduces uncertainty while waiting.

## Conclusions

My biggest takeaway from this project is that designing for an emergency demands a different level of simplification than usual: every extra step is a real barrier in a moment of panic. As a limitation, we couldn't test the competing apps directly (all the benchmarking relied on secondary sources), and the prototype doesn't yet include real integration with electronic health record systems. As next steps: integration with wearables for at-risk users, usability testing with older adults in simulated emergencies, and AI-driven automatic prioritization of requests based on clinical profile.
