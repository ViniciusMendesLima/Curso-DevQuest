type TaskProps = {
    description?: string;
}

const NewTask = ({description= "Nenhuma terefa cadastrada"}: TaskProps) => {
    return <p>Tarefa: {description}</p>
}

export default NewTask;