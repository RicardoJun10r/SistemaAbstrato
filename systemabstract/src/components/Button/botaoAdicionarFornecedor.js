import React, { useState } from "react";
import { Typography, Box, Button, Divider, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import ModalFornecedorCriar from "../Modal/modalFornecedorCriar";

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

const BotaoAdicionarFornecedor = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return(
        <Box sx={{backgroundColor: 'white', width: '700px', height: '350px', border:'1px solid', borderRadius:'10px'}}>
            <Stack sx={{position: 'relative', alignItems: 'center'}} direction='row' divider={<Divider sx={{height: '350px'}} orientation="vertical" flexItem />} spacing={2}>
                <Item>
                    <Typography fontFamily='roboto' variant="h3">
                        Sem fornecedor cadastrado<br/>Adicione seu fornecedor
                    </Typography>
                </Item>
                <Item>
                    <Button sx={{}} onClick={handleOpen} variant="contained">Adicionar</Button>
                    {open === 'false' ? null : <ModalFornecedorCriar open={open} handleClose={handleClose} />}
                </Item>
            </Stack>
        </Box>
    )
}

export default BotaoAdicionarFornecedor;