<script>
  import { T, useTask } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import { spring } from "svelte/motion";
  import { location } from "svelte-spa-router";

  interactivity();
  const scale = spring(1);
  let rotation = 0;
  useTask((delta) => {
    rotation += delta;
  });

  function lol() {
    scale.set($location.length / 5);
  }

  $: $location, lol();
</script>

<T.PerspectiveCamera
  makeDefault
  position={[7.5, 5, 8]}
  on:create={({ ref }) => {
    ref.lookAt(5, 2, 0);
  }}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh
  rotation.y={rotation}
  position.y={$scale}
  position.x={-1}
  scale={$scale}
  castShadow
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
  <T.CircleGeometry args={[4, 40]} />
  <T.MeshStandardMaterial color="darkblue" />
</T.Mesh>

<T.Mesh
  rotation.y={rotation}
  position.y={$scale}
  position.x={10}
  scale={$scale}
  castShadow
  on:pointerenter={() => scale.set(1.5)}
  on:pointerleave={() => scale.set(1)}
>
  <T.BoxGeometry args={[1, 2, 1]} />
  <T.MeshStandardMaterial color="hotpink" />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} position.x={10} receiveShadow>
  <T.CircleGeometry args={[4, 40]} />
  <T.MeshStandardMaterial color="darkblue" />
</T.Mesh>
