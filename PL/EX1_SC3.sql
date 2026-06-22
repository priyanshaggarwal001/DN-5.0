BEGIN
    for c in (select customer_id,Loan_id,due_date from loan where due_date between sysdate and sysdate+30) loop
    DBMS_OUTPUT.PUT_LINE('Remainder customer '|| c.customer_id || ' has loan '||c.Loan_id || ' with due date '||c.due_date);
    end loop;
END;
/