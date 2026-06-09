export function GlobeLighting() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 3, 5]} intensity={2.2} />
    </>
  )
}