import { InView } from "react-intersection-observer";
import { motion } from 'framer-motion'
import Title from "./ui/titles";

function MetricsNumber({value, label, delay=0}: {value: number | string, label: string, delay?: number}) {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20}}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
          transition={{ duration: 0.5, delay: delay }}
          className="flex flex-col items-center"
        >
          <h3 className="text-[80px] font-medium text-secondary">{value}</h3>
          <p className="text-lg text-muted-foreground">{label}</p>
        </motion.div>
      )}
    </InView>
  )
}

const metrics = [
    {value: '100+', label: 'Estudiantes'},
    {value: 20, label: 'Profesores'},
    {value: 10, label: 'Aulas'},
    {value: 5, label: 'Laboratorios'},
    ]


export default function Metrics() {
  return (
    <section className=" w-screen flex flex-col items-center py-8 space-y-4 container">
        <Title title="Nuestros Números" description="Conoce más sobre nuestra institución" tagContent="Metricas" ClassNameProps={{classNameTag:'bg-muted'}} />
        <div className="w-full flex flex-col md:flex-row md:gap-20 items-center justify-center gap-4">
            {metrics.map((metric, index) => (
                <MetricsNumber key={index} value={metric.value} label={metric.label} delay={index/2} />
            ))}
        </div>
    </section>
  )
}
