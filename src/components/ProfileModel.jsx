// ProfileModel.jsx
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'


function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

const ProfileViewer = ({ modelUrl }) => {
  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ProfileViewer