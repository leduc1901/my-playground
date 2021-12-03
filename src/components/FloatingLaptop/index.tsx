import React, { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { a as three, SpringValue } from "@react-spring/three";
import Laptop from "../../models/Laptop";
import { a as animate } from "@react-spring/web";

type FloatingLaptopProps = {
  openProps: SpringValue<number>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FloatingLaptop: FC<FloatingLaptopProps> = ({
  openProps,
  open,
  setOpen,
}: FloatingLaptopProps) => {
  return (
    <animate.div
      style={{
        transform: openProps.to((o) => `translate3d(${o * -25}%, 0px,0)`),
      }}
    >
      <Canvas
        style={{ height: "100vh" }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 0], fov: 35 }}
      >
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={openProps.to([0, 1], ["#f0f0f0", "#ffffff"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Laptop open={open} hinge={openProps.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -4.5, 0]}
          opacity={0.4}
          width={20}
          height={20}
          blur={2}
          far={4.5}
          key={undefined}
          attach={undefined}
          attachArray={undefined}
          attachObject={undefined}
          args={undefined}
          // eslint-disable-next-line react/no-children-prop
          children={undefined}
          onUpdate={undefined}
          up={undefined}
          rotation={undefined}
          matrix={undefined}
          quaternion={undefined}
          layers={undefined}
          dispose={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerMissed={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          visible={undefined}
          type={undefined}
          isGroup={undefined}
          id={undefined}
          uuid={undefined}
          name={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
      </Canvas>
    </animate.div>
  );
};

export default FloatingLaptop;
