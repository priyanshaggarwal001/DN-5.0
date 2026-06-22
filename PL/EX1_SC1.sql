BEGIN
    for c in (select customer_id, customer_age from customers) loop
        if c.customer_age>60 then
            update loan set interest_rate=interest_rate-1
             where customer_id=c.customer_id;
        end if;
    end loop;
    commit;
END;
/