BEGIN
    for c in (select customer_id,customer_balance from customers) loop
        if c.customer_balance>10000 then
           update customers set customer_status='VIP' where customer_id=c.customer_id;
        end if;
    end loop;
    commit;
END;
/