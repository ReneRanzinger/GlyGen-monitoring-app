import React, {useState} from  "react"
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Nav, Navbar, Col, Row, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import DetailLogging from '../../pages/DetailLogging';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  headCells: PropTypes.object.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { tableName } = props;

  return (
    <Toolbar

    >
      {(
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {tableName}
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  tableName: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { post, tableName, headers, dataField, allRecords, linkIndex, miscellanious } = props;
  const rows = post;
  const isNumericList = [];
  for (const [index, value] of dataField.entries()) {
    isNumericList.push(rows[0][value] instanceof PropTypes.number);
    console.log(rows[0].value);
  }
  console.log(isNumericList);
  const headCellsTemp = [];
  for (const [index, value] of Object.keys(rows[0]).entries()) {
    headCellsTemp.push({ id: value, numeric: true, disablePadding: true, label: headers[index] });
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  let history = useHistory();
  function detailLog(row, key) {
    var queryTemp = "";
    if (tableName === "Page-wise frequencies") {
        queryTemp = {
        type: key ==="access" ? "user": "error",
        start_date: miscellanious.startDate,
        end_date: miscellanious.endDate,
        page: row["page"], 
        offset: 1,
        limit: row[key],
        order: "desc",
      };
    }
    if (tableName === "Access-type frequencies") {
      queryTemp = {
        type: row["type"] === "user" ? "user" : "error",
        start_date: miscellanious.startDate,
        end_date: miscellanious.endDate, 
        offset: 1,
        limit: row[key],
        order: "desc",
      };
    }
    if (tableName === "User-wise frequencies") {
      queryTemp = {
        type: key ==="access" ? "user" : "error",
        start_date: miscellanious.startDate,
        end_date: miscellanious.endDate, 
        user: row["user"],
        offset: 1,
        limit: row[key],
        order: "desc",
      };
    }
   
    //console.log(queryTemp, "querysdfsdf");
    history.push('./detaillogging/'+JSON.stringify(queryTemp));
  //   history.push({
  //     pathname: './detaillogging/',
  //     state: { detail: "testing" }
  // });
  }
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} tableName={tableName} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCellsTemp}
            />
            {!allRecords && (<TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow>
                      {dataField.map((key, index) => (
                        <TableCell align="right">
                          {linkIndex[index] && (<Navbar.Text as={NavLink} to={`/site-specific/${row.position}`}>
                            {row[key]}
                          </Navbar.Text>)}
                          {!linkIndex[index] && (row[key])
                          }
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>)}
            {allRecords && (<TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .map((row, index) => {
                  return (
                    <TableRow>
                      {dataField.map((key, index) => (
                        <TableCell align="right">
                          {linkIndex[index] && (<Link onClick={() => detailLog(row,key)}>
                            {row[key]}
                          </Link>)}
                          
                          {!linkIndex[index] && (row[key])
                          }
                        </TableCell>
                      ))}
                    </TableRow>

                  );

                })}
            </TableBody>)}
          </Table>
        </TableContainer>
        {!allRecords && (<TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />)}
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
